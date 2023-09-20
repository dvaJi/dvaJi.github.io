---
title: "Protect NextJS API with Zod"
description: "Zod is a TypeScript library for data validation. It's a great tool to validate data in your NextJS API routes."
pubDate: "Nov 24 2022"
---

A basic step for securing our APIs is to validate the data that we receive. Various libraries can help us with this task, and in this post, we will demonstrate how to use Zod to validate data in your NextJS API routes.

## What is Zod?

Zod is a TypeScript library for data validation. It's a great tool for validating data in your NextJS API routes as it allows you to create specific schemas to validate the data you receive.

## Install Zod

To install Zod, run the following command:

```bash
npm install zod
```

## Usage

Zod provides a set of functions to create schemas, these schemas can be used to validate data.

### Create a schema

To create a schema, we can use the `z.object` function, this function receives an object with the properties that we want to validate.

```ts
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number(),
});
```

### Validate data

To validate data, we can use the `parse` function, this function receives the data that we want to validate and returns the validated data.

```ts
const data = {
  name: "John",
  age: 30,
};

const validatedData = schema.parse(data);
```

### Validate data with a custom error message

To validate data with a custom error message, we can use the `parseAsync` function, this function receives the data that we want to validate and returns a promise with the validated data.

```ts
const data = {
  name: "John",
  age: "30",
};

const validatedData = await schema.parseAsync(data).catch((error) => {
  throw new Error("Invalid data");
});
```

## Using Zod with Next.JS API routes

In this example, we will create a NextJS API route to create a user, we will use Zod to validate the data that we receive.

### Create a NextJS API route

To create a NextJS API route, we can create a file in the `pages/api` directory, this file will be an API route.

```ts
// pages/api/users/create.ts
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  res.status(200).json({ message: `Hello ${data.name}!` });
};
```

### Validate data

To validate data, we can use the `parse` function, this function receives the data that we want to validate and returns the validated data.

```ts
// pages/api/users/create.ts
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const schema = z.object({
    name: z.string(),
  });

  const validatedData = schema.parse(req.body);

  res.status(200).json({ message: `Hello ${validatedData.name}!` });
};
```

### Validate data with a custom error message

To validate data with a custom error message, we can use the `parseAsync` function, this function receives the data that we want to validate and returns a promise with the validated data.

```ts
// pages/api/users/create.ts
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const schema = z.object({
    name: z.string(),
  });

  const validatedData = await schema.parseAsync(req.body).catch((error) => {
    return res.status(200).json({ message: `Invalid data`, error });
  });

  res.status(200).json({ message: `Hello ${validatedData.name}!` });
};
```

### Validate data using parseSafe

To validate data using `parseSafe`, we can use the `parseSafe` function, this function receives the data that we want to validate and returns an object with the validated data and the error.

```ts
// pages/api/users/create.ts
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const schema = z.object({
    name: z.string(),
  });

  const response = schema.safeParse(req.body);

  if (!response.success) {
    return res.status(400).send({
      message: `Yo, bad payload!`,
      error: response.error,
    });
  }

  res.status(200).json({ message: `Hello ${response.data.name}!` });
};
```

## Final Words

In this post, we saw how to use Zod to validate data in our NextJS API routes, Zod is a great tool to validate data in our NextJS API routes. If you want to learn more about Zod, you can check the [Zod documentation](https://zod.dev/?id=basic-usage).
