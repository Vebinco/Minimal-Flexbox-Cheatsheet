# Flexify – A Flexbox Cheatsheet

Welcome to Flexify, a comprehensive cheatsheet for CSS Flexbox. This guide provides a quick reference to all the essential properties for both flex containers and flex items, complete with descriptions and code examples.

## Table of Contents

- [Flex Container Properties](#flex-container-properties)
  - [display](#display)
  - [flex-direction](#flex-direction)
  - [flex-wrap](#flex-wrap)
  - [justify-content](#justify-content)
  - [align-items](#align-items)
  - [align-content](#align-content)
  - [gap](#gap)
- [Flex Item Properties](#flex-item-properties)
  - [order](#order)
  - [flex-grow](#flex-grow)
  - [flex-shrink](#flex-shrink)
  - [flex-basis](#flex-basis)
  - [align-self](#align-self)

---

## Flex Container Properties

These properties are applied to the parent element (the flex container).

### `display`

Initializes a flex container. This enables a flex context for all its direct children.

- **Syntax:** `display: flex;` or `display: inline-flex;`

- **Explanation:**
  - `flex`: The container behaves like a block-level element.
  - `inline-flex`: The container behaves like an inline-level element.

```css
.container {
  display: flex; /* Makes .container a block-level flex container */
}
```

### `flex-direction`

Defines the direction flex items are placed in the flex container.

- **Syntax:** `flex-direction: row | row-reverse | column | column-reverse;`

- **Explanation:**
  - `row` (default): Items are placed from left to right.
  - `row-reverse`: Items are placed from right to left.
  - `column`: Items are placed from top to bottom.
  - `column-reverse`: Items are placed from bottom to top.

```css
.container {
  flex-direction: column; /* Stacks items vertically */
}
```

### `flex-wrap`

Specifies whether flex items should wrap or not if there isn't enough space for them on one line.

- **Syntax:** `flex-wrap: nowrap | wrap | wrap-reverse;`

- **Explanation:**
  - `nowrap` (default): All items will be on one line.
  - `wrap`: Items will wrap onto multiple lines, from top to bottom.
  - `wrap-reverse`: Items will wrap onto multiple lines from bottom to top.

```css
.container {
  flex-wrap: wrap; /* Allows items to wrap to the next line */
}
```

### `justify-content`

Defines the alignment of items along the main axis.

- **Syntax:** `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;`

- **Explanation:**
  - `flex-start` (default): Items are packed toward the start of the flex-direction.
  - `flex-end`: Items are packed toward the end.
  - `center`: Items are centered along the line.
  - `space-between`: Items are evenly distributed; first item is on the start line, last item on the end line.
  - `space-around`: Items are evenly distributed with equal space around them.
  - `space-evenly`: Items are distributed so that the spacing between any two items is equal.

```css
.container {
  justify-content: center; /* Centers items along the main axis */
}
```

### `align-items`

Defines the default behavior for how items are laid out along the cross axis.

- **Syntax:** `align-items: stretch | flex-start | flex-end | center | baseline;`

- **Explanation:**
  - `stretch` (default): Stretch to fill the container (still respects min/max-width).
  - `flex-start`: Items are placed at the start of the cross axis.
  - `flex-end`: Items are placed at the end of the cross axis.
  - `center`: Items are centered on the cross axis.
  - `baseline`: Items are aligned such as their baselines align.

```css
.container {
  align-items: center; /* Centers items along the cross axis */
}
```

### `align-content`

Aligns a flex container's lines within when there is extra space in the cross-axis (e.g., when `flex-wrap: wrap` is used).

- **Syntax:** `align-content: flex-start | flex-end | center | space-between | space-around | stretch;`

- **Explanation:**
  - `stretch` (default): Lines stretch to take up the remaining space.
  - `flex-start`: Lines packed to the start of the container.
  - `flex-end`: Lines packed to the end of the container.
  - `center`: Lines packed to the center of the container.
  - `space-between`: Lines evenly distributed; the first line is at the start, the last one at the end.
  - `space-around`: Lines evenly distributed with equal space around each line.

```css
.container {
  align-content: space-between; /* Distributes wrapped lines evenly */
}
```

### `gap`

Controls the space between flex items. It applies that spacing only between items, not on the outer edges.

- **Syntax:** `gap: <row-gap> <column-gap>;` or `gap: <gap>;`

- **Explanation:**
  - A single value sets both the row and column gap.
  - Two values set the row and column gap separately.

```css
.container {
  gap: 1rem; /* Adds 1rem of space between all items */
}
```

---

## Flex Item Properties

These properties are applied to the children (the flex items).

### `order`

Specifies the order of a flex item relative to the rest of the flex items inside the same container.

- **Syntax:** `order: <integer>;`
- **Default:** `0`

- **Explanation:** Items with lower `order` values appear first. Negative numbers are allowed.

```css
.item-1 {
  order: 2; /* This item will appear after items with order < 2 */
}
.item-2 {
  order: 1;
}
```

### `flex-grow`

Defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.

- **Syntax:** `flex-grow: <number>;`
- **Default:** `0`

- **Explanation:** If all items have `flex-grow: 1`, the remaining space in the container will be distributed equally to all children. If one child has `flex-grow: 2`, it will take up twice as much space as the others.

```css
.item {
  flex-grow: 1; /* Allows this item to grow and fill available space */
}
```

### `flex-shrink`

Defines the ability for a flex item to shrink if necessary.

- **Syntax:** `flex-shrink: <number>;`
- **Default:** `1`

- **Explanation:** By default, items are allowed to shrink. A value of `0` prevents shrinking.

```css
.item {
  flex-shrink: 0; /* Prevents this item from shrinking */
}
```

### `flex-basis`

Defines the default size of an element before the remaining space is distributed.

- **Syntax:** `flex-basis: <length> | auto;`
- **Default:** `auto`

- **Explanation:** It can be a length (e.g., `20%`, `5rem`, etc.) or the keyword `auto`. If set to `auto`, it looks at the `width` or `height` property of the item.

```css
.item {
  flex-basis: 200px; /* This item will have a base size of 200px */
}
```

### `align-self`

Allows the default alignment (or the one specified by `align-items`) to be overridden for individual flex items.

- **Syntax:** `align-self: auto | flex-start | flex-end | center | baseline | stretch;`

- **Explanation:** The values work the same as `align-items`.

```css
.item {
  align-self: flex-end; /* This item will align itself to the end of the cross axis */
}
```
