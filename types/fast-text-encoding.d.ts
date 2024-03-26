declare module 'fast-text-encoding' {
    export const TextEncoder: {
        new (): TextEncoder;
        encode(input?: string): Uint8Array;
    };
}
