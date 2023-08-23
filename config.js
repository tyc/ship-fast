const config = {
  domainName: "your-site.com",
  crisp: {
    id: "3878e3c2-74cb-498b-a360-4419fb8e7c9b",
    // If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  adminEmail: "",
  stripe: {
    plans: [
      {
        name: "Starter",
        priceId:
          process.env.NODE_ENV === "development" ? "price_123" : "price_456",
        price: 19,
        features: [
          {
            name: "Unlimited access",
          },
          { name: "24/7 support" },
        ],
      },
    ],
  },
  aws: {
    bucket: "bucket-name",
    bucketUrl: `https://bukcet-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    from: `Your Site <noreply@mg.your-site.com>`,
  },
  colors: {
    main: "#f37055",
  },
};

export default config;