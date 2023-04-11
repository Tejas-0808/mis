import React, { useEffect, useState } from "react";
import path from "path-browserify";

const DirectoryTree = () => {
  const [filePaths, setFilePaths] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/links")
      .then((res) => res.json())
      .then((data) => {
        setFilePaths(data);
      });
  }, []);

  const renderTree = (files) => {
    return (
      <ul>
        {files.map((file) => (
          <li key={file.path}>
            {file.name}
            {file.children && renderTree(file.children)}
          </li>
        ))}
      </ul>
    );
  };

  const parseFilePaths = (files) => {
    const root = { name: "root", children: [] };
    const directories = {};

    files.forEach((file) => {
      const parts = path.dirname(file.file_path).split(path.sep);

      let dir = root;
      let dirPath = "";

      parts.forEach((part) => {
        dirPath = path.join(dirPath, part);

        if (!directories[dirPath]) {
          const newDir = { name: part, path: dirPath, children: [] };
          directories[dirPath] = newDir;
          dir.children.push(newDir);
          dir = newDir;
        } else {
          dir = directories[dirPath];
        }
      });

      dir.children.push({ name: path.basename(file.file_path) });
    });

    return root.children;
  };

  const fileTree = parseFilePaths(filePaths);

  return <div>{renderTree(fileTree)}</div>;
};

export default DirectoryTree;
