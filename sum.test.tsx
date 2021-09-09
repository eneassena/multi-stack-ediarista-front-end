import React from "react";
import { render } from '@testing-library/react';



const soma = (a: number, b: number): number => {
  return a + b;
};

function MeuComponent() {
  return <div>MeuComponent</div>;
}

test("add 1 + 2 e igual a 3 ", () => {
  const { getByText } = render(<MeuComponent />);

  expect(getByText('MeuComponent')).toBeVisible();
});
