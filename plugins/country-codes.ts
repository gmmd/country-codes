interface CountryCodesResponse {
  code: string;
  status: string;
  country: string;
  countryCode: string;
}
export default defineNuxtPlugin({
  name: "country-codes",
  async setup() {
    const response = await fetch("http://ip-api.com/json/");
    const data: CountryCodesResponse = await response.json();

    return {
      provide: {
        getCountryCode: data.status === "success" ? data.countryCode : "",
      },
    };
  },
  env: {
    // Set this value to `false` if you don't want the plugin to run when rendering server-only or island components.
    islands: true,
  },
});
