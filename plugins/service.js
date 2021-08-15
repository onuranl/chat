import ChannelService from "~/services/ChannelService";

export default (ctx, inject) => {
  inject("services", {
    channel: ChannelService(ctx)
  });
};
