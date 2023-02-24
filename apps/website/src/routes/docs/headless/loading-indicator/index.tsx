import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { LoadingIndicator } from '@qwik-ui/headless';

export default component$(() => {
  useStylesScoped$(`
    h1 { margin: 0.5rem 0 1rem 0; padding-top: 1rem; font-weight: bold; }
    p { margin-bottom: 0.5rem; }
  `);
  return (
    <>
      <h2>This is the documentation for the Loading Indicator</h2>

      <h1>Loading Indicator Example</h1>

      <LoadingIndicator></LoadingIndicator>

      <h1>Size</h1>
      <p>
        Loading Indicator are sized based on the font size. To change their
        size, set the <b>font-size</b> property on the Loading Indicator itself
        or on a parent element as shown below.
      </p>

      <LoadingIndicator></LoadingIndicator>
      <LoadingIndicator style="font-size: 2rem"></LoadingIndicator>
      <LoadingIndicator style="font-size: 3rem"></LoadingIndicator>

      <h1>Track Width</h1>
      <p>
        The width of the Loading Indicator track can be changed by the property{' '}
        <b>width</b>.
      </p>

      <LoadingIndicator style="font-size: 3rem" width="10px"></LoadingIndicator>

      <h1>Color</h1>
      <p>
        The colors of Loading Indicator can be changed by the properties{' '}
        <b>indicatorColor</b> and <b>trackColor</b>.
      </p>
      <LoadingIndicator
        style="font-size: 3rem"
        width="10px"
        indicatorColor="darkblue"
        trackColor="lightblue"
      ></LoadingIndicator>

      <h1>Speed</h1>
      <p>
        The speed of the Loading Indicator can be changed by the property{' '}
        <b>speed</b>.
      </p>
      <LoadingIndicator style="font-size: 3rem" speed="5s"></LoadingIndicator>
    </>
  );
});
