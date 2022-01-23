import { image } from "./md"

describe('image', () => {
  it('should parse image and add options', () => {
    const res = image('{”width”: 480} Description', 'http://a.com/img.png'
    )

    expect(res).toEqual(
`<div class="mdx-image-container with-border wone g1" style="max-width: 480px; border-color: red;">

![Description](http://a.com/img.png)

</div>`
)
  })
})