export default ({ $axios }) => ({
    channels() {
        return $axios.get("/channel/channels");
    },
    channelsByID(id) {
        return $axios.get("/channel/channels/" + id);
    },
    create(data) {
        return $axios.post("/channel/create", data);
    },
    channelMessages(id) {
        return $axios.get("/channel/" + id);
    },
    sendMessages(id) {
        return $axios.post("/channel/message/" + id);
    }
  });
  