import React, { useRef, useState, useEffect } from "react";

export default function Dropzone(props) {
  const fileInputRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState(props.content);
  const [validFiles, setValidFiles] = useState(props.content);
  const [drag, setDrag] = useState(false);

  useEffect(() => {
    let filteredArr = selectedFiles.reduce((acc, current) => {
      const x = acc.find((item) => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    setValidFiles([...filteredArr]);
    props.setNewContent([...filteredArr]);
  }, [selectedFiles]);

  const preventDefault = (e) => {
    e.preventDefault();
    // e.stopPropagation();
  };

  const dragOver = (e) => {
    setDrag(true);
    preventDefault(e);
  };

  const dragEnter = (e) => {
    preventDefault(e);
  };

  const dragLeave = (e) => {
    setDrag(false);
    preventDefault(e);
  };

  const fileDrop = (e) => {
    setDrag(false);
    preventDefault(e);
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  const fileInputClicked = () => {
    fileInputRef.current.click();
  };

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (getFile(files[i]) === "image") {
        files[i]["fileState"] = "image";
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
      }
      if (getFile(files[i]) === "video") {
        files[i]["fileState"] = "video";
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
      }
      if (getFile(files[i]) === "otherFile") {
        files[i]["fileState"] = "otherFile";
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
      }
    }
  };

  const getFile = (file) => {
    const type = file.type.split("/")[0];
    if (type === "image") {
      return "image";
    }
    if (type === "video") {
      return "video";
    }
    return "otherFile";
  };

  const fileSize = (size) => {
    if (size === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const removeFile = (name) => {
    const index = validFiles.findIndex((e) => e.name === name);
    const index2 = selectedFiles.findIndex((e) => e.name === name);
    validFiles.splice(index, 1);
    selectedFiles.splice(index2, 1);
    setValidFiles([...validFiles]);
    setSelectedFiles([...selectedFiles]);
  };

  const ImageUrl = (file) => {
    return URL.createObjectURL(file);
  };

  const EMPTY_FILE = `https://firebasestorage.googleapis.com/v0/b/app-golgi.appspot.com/o/assets%2Fdoc.png?alt=media&token=62c30dbd-dc69-4747-8046-c5b5173a3ba4`;
  const EMPTY_IMG = `https://firebasestorage.googleapis.com/v0/b/app-golgi.appspot.com/o/assets%2FGroup%20600.png?alt=media&token=eadd0b4e-bda8-4e67-ad2a-9679055ce5d3`;
  const EMPTY_VIDEO = `https://firebasestorage.googleapis.com/v0/b/app-golgi.appspot.com/o/assets%2FGroup%20601.png?alt=media&token=33aeefab-1a7a-42ad-8975-8cede72815d6`;

  return (
    <>
      <div className="sm:col-span-6">
        <div
          className={`mb-8 mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ${
            drag && "border-gray-400"
          }`}
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          onClick={fileInputClicked}
        >
          <div className="space-y-1 text-center">
            <svg
              className={`mx-auto h-12 w-12 ${
                drag ? "text-gray-400" : "text-gray-300"
              }`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="truncate relative cursor-pointer bg-white rounded-md font-medium text-doctoc-600 hover:text-doctoc-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-doctoc-500"
              >
                <span>Sube un archivo</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  onChange={filesSelected}
                  className="sr-only"
                />
              </label>
              <p className="pl-1 truncate">o suéltalo aquí</p>
            </div>
            <p className="text-xs text-gray-500 truncate">Imágenes, Videos y Documentos</p>
            {/* Fold resolver */}
          </div>
        </div>
        <ul
          role="list"
          className="mb-6 mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {validFiles.map((data, i) => (
            <li key={i} className="relative">
              <div className="w-full h-24 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                <img
                  src={
                    data.fileState === "image"
                      ? ImageUrl(data) || EMPTY_IMG
                      : data.fileState === "video"
                      ? EMPTY_VIDEO
                      : EMPTY_FILE
                  }
                  alt=""
                  className={`rounded-sm w-full h-full pointer-events-none ${
                    data.fileState === "video" || data.fileState === "otherFile"
                      ? "object-contain"
                      : "object-cover"
                  }`}
                />
                <button type="button" className="absolute inset-0">
                  <span className="sr-only">View details for {data.name}</span>
                </button>
              </div>
              <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                {data.name}
              </p>
              <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                {fileSize(data.size)}
              </p>
              <div
                className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
                onClick={() => removeFile(data.name)}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 3C0 1.34315 1.34315 0 3 0H17C18.6568 0 20 1.34315 20 3V17C20 18.6568 18.6568 20 17 20H3C1.34315 20 0 18.6568 0 17V3Z"
                    fill="#333333"
                  />
                  <path
                    d="M7 13.5C7 14.05 7.45 14.5 8 14.5H12C12.55 14.5 13 14.05 13 13.5V7.5H7V13.5ZM13.5 6H11.75L11.25 5.5H8.75L8.25 6H6.5V7H13.5V6Z"
                    fill="white"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
