// import axios from "axios";

export class HttpClient {
  //! Usando axios
  //   async get(url: string) {
  //     const { data, status } = await axios.get(url);
  //     console.log(`Status: ${status}`);
  //     return { data, status };
  //   }

  async get(url: string) {
    const resp = await fetch(url);
    const data = await resp.json();
    const status = resp.status;
    console.log(`Status: ${status}`);
    return { data, status };
  }
}
