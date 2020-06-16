import { readAndCompressImage } from "browser-image-resizer";
import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const Base = styled.div`
  padding: 10px;
  border: 1px solid #756f6f;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export interface HackerStep1Props {
  style?: {};
  className?: string;
}

const Icon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12c.6 0 1 .4 1 1v4a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 112 0v4a3 3 0 01-3 3H3a3 3 0 01-3-3v-4c0-.6.4-1 1-1zM9.3.3a1 1 0 011.4 0l5 5a1 1 0 01-1.4 1.4L10 2.4 5.7 6.7a1 1 0 01-1.4-1.4l5-5z"
      fill="#50555C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0c.6 0 1 .4 1 1v12a1 1 0 11-2 0V1c0-.6.4-1 1-1z"
      fill="#50555C"
    />
  </svg>
);
const toBase64 = (file) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export interface ImageFieldProps {
  style?: {};
  className?: string;
  value?: string;
  onChange: (v: string) => void;
}

const ImageField: React.FC<ImageFieldProps> = ({
  style,
  className,
  value,
  onChange,
}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: async (acceptedFiles) => {
      const [file] = acceptedFiles;
      const config = {
        quality: 0.7,
        maxWidth: 1680,
        maxHeight: 1680,
        autoRotate: true,
      };

      const shouldResize = file.size > 512 * 1024;
      const resizedFile = shouldResize
        ? await readAndCompressImage(file, config)
        : file;

      const fileString = await toBase64(resizedFile);

      onChange(fileString);
    },
    multiple: false,
  });
  return (
    <Base style={style} className={className} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the photo here ...</p>
      ) : (
        <p>
          <Icon /> Photo Upload
        </p>
      )}
      {value ? (
        <div>
          <img
            style={{ display: "block", width: 200, paddingBottom: 5 }}
            src={value}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onChange(null);
            }}
          >
            remove
          </button>
        </div>
      ) : null}
    </Base>
  );
};

export default ImageField;
