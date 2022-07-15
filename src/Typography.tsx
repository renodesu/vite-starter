const Typography = () => {
  return (
    <div className="prose dark:prose-invert">
      <div>
        <h1>H1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>H2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h3>H3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h4>H4</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h5>H5</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h6>H6</h6>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis
          est, pharetra ut justo id, ullamcorper condimentum odio. Proin pretium
          pharetra eros sed hendrerit. Aliquam eleifend orci malesuada dui
          dictum finibus. Mauris tincidunt ac metus id sodales. Nulla nec
          dignissim ex, vitae gravida lectus. Donec ut lectus pretium, eleifend
          mauris ut, condimentum lacus. Ut fermentum augue vitae nulla tempus
          vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis
          est, pharetra ut justo id, ullamcorper condimentum odio. Proin pretium
          pharetra eros sed hendrerit. Aliquam eleifend orci malesuada dui
          dictum finibus. Mauris tincidunt ac metus id sodales. Nulla nec
          dignissim ex, vitae gravida lectus. Donec ut lectus pretium, eleifend
          mauris ut, condimentum lacus. Ut fermentum augue vitae nulla tempus
          vulputate.
        </p>
      </div>
      <div>
        <div>
          <input type="text" name="" id="" placeholder="text" />
          <input type="password" name="" id="" placeholder="password" />
        </div>
        <button>Button</button>
        <button disabled>Disabled</button>
        <div>
          <select name="" id="">
            <option value="foo">fooooo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </select>
          jeejee
        </div>
        <div>
          <select name="" id="" disabled>
            <option value="foo">foo</option>
          </select>
        </div>
        <div>
          <input type="checkbox" name="kek" id="kek" />
          <label htmlFor="kek">Label next to checkbox</label>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Checkbox inside label
          </label>
        </div>
        <div>
          <input type="radio" name="" id="" />
          <label htmlFor="">Label next to radio</label>
        </div>
        <div className="py-2">
          <input type="radio" name="foo" id="" />
          <input type="radio" name="foo" id="" />
          <input type="radio" name="foo" id="" />
          <input type="radio" name="foo" id="" />
        </div>
        <div>
          <label htmlFor="a1">
            <input type="radio" name="" id="a1" />
            Radio inside label
          </label>
        </div>
        <div>
          <h2>Code</h2>
          <code>// some JS const kek = 666 const res = await foo(kek)</code>
        </div>
        <div>
          <h2>Blockquote</h2>
          <blockquote>
            // some JS const kek = 666 const res = await foo(kek)
          </blockquote>
        </div>
        <div>
          <ul>
            <li>Foo</li>
            <li>Bar</li>
            <li>Baz</li>
          </ul>
        </div>
        <div>
          <ol>
            <li>Foo</li>
            <li>Bar</li>
            <li>Baz</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Typography
