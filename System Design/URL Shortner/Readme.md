## URL Shortner

## Step 1 : Gather functional Requirement

Your responsibility to ask the clarifying questions.

1. What the bitly actually does?
2. Create a sort url from a long url
3. User should get redirected to the original from the short url
4. Support custom renaming for sort url
5. Support for the expiration date

## Step 2 : Gather the non functional requirement

- Low latency : Url creation, Redirecting time
- Scaling : 100M Daily Active User , Transform 1B long form URL
- Uniqure URL for all
- CAP Theorm : Availability >> Consistency Availbility

## Step 3 : Indentity Core Entity

- Short URl
- Long URL
- User

## Step 4 : API Design

```js
POST /v1/url ----> short-url
{
longURL,
customURL,
expirationURL
}

GET /v1/url/{shortURL} -> Long URl
```

```js
GET /v1/url/{shortURL} -> Long URl
```

## Step 5: High Level Design

- [Here](./HighLevelDesign.excalidraw)

## Step 6: Low Level Design

- [Here](./LowLevelDesign.excalidraw)
