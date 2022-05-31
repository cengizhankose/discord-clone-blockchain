export const conversationSchema = {
  name: "conversations",
  type: "document",
  title: "Conversations",
  fields: [
    {
      name: "roomName",
      type: "string",
      title: "Room Name",
    },
    {
      name: "roomId",
      type: "string",
      title: "Room Id",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "isDm",
      type: "boolean",
      title: "Is Dm",
    },
    {
      name: "userReference",
      type: "reference",
      to: [{ type: "users" }],
    },
  ],
};
