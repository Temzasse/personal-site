import { Suspense } from "react";
import { unstable_cache } from "next/cache";
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from "react-tweet";
import { getTweet as _getTweet } from "react-tweet/api";

const getTweet = unstable_cache(
  async (id: string) => _getTweet(id),
  ["tweet"],
  { revalidate: 3600 * 24 }
);

async function TweetEmbed({ id }: { id: string }) {
  try {
    const tweet = await getTweet(id);
    return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />;
  } catch (error) {
    console.error(error);
    return <TweetNotFound error={error} />;
  }
}

export function Tweet({ id }: { id: string }) {
  if (!id) return null;
  return (
    <Suspense fallback={<TweetSkeleton />}>
      <div className="tweet" data-theme="dark">
        <TweetEmbed id={id} />
      </div>
    </Suspense>
  );
}
