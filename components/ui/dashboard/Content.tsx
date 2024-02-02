import React from "react";
import Card from "./Card";

const Content = ({ avatars }: any) => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center justify-center px-6 mt-2 mb-16 w-full">
      {avatars.map((avatarData: any, index: number) => (
        <Card key={`${avatarData?._id} + ${index}`} avatarData={avatarData} />
      ))}
    </div>
  );
};

export default Content;
