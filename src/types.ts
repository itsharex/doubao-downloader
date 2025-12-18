export type Creation = {
  image: {
    image_ori_raw: {
      url: string;
    };
    image_ori: {
      url: string;
    };
    image_preview: {
      url: string;
    };
    image_thumb: {
      url: string;
    };
  };
};

export type Message = {
  conversation_id: string;
  message_id: string;
  creations: Creation[];
}

declare global {
  const __APP_VERSION__: string;
  const __BUILD_TIME__: string;
  interface Window {
    origin_parse: (data: string) => any;
    ZIP: any;
  }
}

interface FileLike {
  name: string;
  lastModified?: number;
  directory?: boolean;
  comment?: string;
  stream?: () => ReadableStream<Uint8Array>;
}

export type ZipWriter = {
  enqueue: (fileLike: FileLike) => void;
  close: () => void;
}
