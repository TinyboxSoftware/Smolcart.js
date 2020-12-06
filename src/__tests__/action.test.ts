import { ActionType } from '../types';
import Action from '../utils/Action';

import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import { mocked } from 'ts-jest/utils';
enableFetchMocks();

beforeAll(() => jest.spyOn(window, 'fetch'));

beforeEach(() => {
  fetchMock.doMock();
});

afterEach(() => {
  jest.clearAllMocks();
});

it('Adds Items to Cart', async () => {
  const testPayload = [{ id: '12345', quantity: 1 }];
  const addAction = new Action(testPayload, ActionType.Add);
  await addAction.execute();

  expect(window.fetch).toHaveBeenCalledWith(
    expect.stringContaining('/cart/add.js'),
    expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ items: testPayload }),
    })
  );
  expect(window.fetch).toHaveBeenCalledTimes(1);
});

it('Modifies the items in the cart', async () => {
  const testPayload = [{ id: '12345', quantity: 0 }];
  const modifyCartAction = new Action(testPayload, ActionType.Modify);
  await modifyCartAction.execute();

  expect(window.fetch).toHaveBeenCalledWith(
    expect.stringContaining('/cart/change.js'),
    expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({
        id: testPayload[0].id,
        quantity: testPayload[0].quantity,
      }),
    })
  );
  expect(window.fetch).toHaveBeenCalledTimes(1);
});

it('Returns the contents of the cart', async () => {
  const getCartAction = new Action(null, ActionType.GetCart);
  mocked(window.fetch).mockResolvedValueOnce(
    new Response(JSON.stringify({ cartCount: 1, cartValue: 12000 }))
  );
  await getCartAction.execute();

  expect(window.fetch).toHaveBeenCalledWith(
    expect.stringContaining('/cart.js')
  );
  expect(window.fetch).toHaveBeenCalledTimes(1);
});

it('Clears the contents in the cart', async () => {
  const modifyCartAction = new Action(null, ActionType.ClearCart);
  mocked(window.fetch).mockResolvedValueOnce(
    new Response(JSON.stringify({ cartCount: 1, cartValue: 12000 }))
  );

  await modifyCartAction.execute();

  expect(window.fetch).toHaveBeenCalledWith(
    expect.stringContaining('/cart/clear.js'),
    expect.objectContaining({
      method: 'POST',
    })
  );
  expect(window.fetch).toHaveBeenCalledTimes(1);
});
