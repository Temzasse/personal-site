/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const hasSlug = searchParams.has("slug");
    const slug = hasSlug ? searchParams.get("slug") : "";

    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Teemu Taskula's blog";

    const bg = (await fetch(new URL("./background.jpg", import.meta.url)).then(
      (res) => res.arrayBuffer()
    )) as any;

    const avatar = (await fetch(new URL("./avatar.png", import.meta.url)).then(
      (res) => res.arrayBuffer()
    )) as any;

    const dmSans = await fetch(
      new URL("./dm-sans-regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const dmSerif = await fetch(
      new URL("./dm-serif-display-regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      <div
        style={{
          backgroundColor: "black",
          height: "100%",
          width: "100%",
          display: "flex",
        }}
      >
        <img width="1200" height="630" src={bg} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "60px 80px",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "#fff",
                fontFamily: "DM Serif Display",
                fontSize: "60px",
              }}
            >
              {title}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img width="150" height="150" src={avatar} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontFamily: "DM Sans",
                  fontSize: 25,
                }}
              >
                Blog by
              </div>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "DM Serif Display",
                  fontSize: 40,
                }}
              >
                Teemu Taskula
              </div>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "DM Sans",
                  fontSize: 16,
                }}
              >
                {`teemutaskula.com${slug}`}
              </div>
            </div>
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "DM Sans",
            data: dmSans,
            style: "normal",
          },
          {
            name: "DM Serif Display",
            data: dmSerif,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
