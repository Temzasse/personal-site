export type TokenName<T> = T extends `$${infer U}` ? U : T;
