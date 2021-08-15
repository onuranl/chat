export default ({ $axios }) => ({
    register(data) {
      return $axios.post("/auth/register", data);
    },
  });
  