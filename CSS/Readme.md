## Checklist

1. Min() Function : Highest and lowest

```css
// Before
.container {
  padding: 40px;
}
// After
.container {
  padding: min(40px, 7%);
}
```

2. Responsive Font Size :

```css
h2 {
  font-size: 10vw;
}

h2 {
  font-size: 10rem;
}
```

3. Combine Clamp() & Calc() ; Covering small to large device with zoom

```css
//before
h2 {
  font-size: 10vw;
}
//after
h2 {
  font-size: clamp(1.8rem, calc(7vw + 1rem), 5rem);
}
```

4. Constant Image Responsive Dimmension :

```css
img {
  max-width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
}
```
