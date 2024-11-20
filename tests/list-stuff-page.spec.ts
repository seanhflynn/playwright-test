import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/list');
  await page.getByRole('link', { name: 'Add Stuff' }).click();
  await page.getByRole('link', { name: 'List Stuff' }).click();
  await page.getByRole('link', { name: 'List Stuff' }).click();
  await page.getByRole('button', { name: 'john@foo.com' }).click();
  await page.getByRole('link', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('cell', { name: 'Quantity' }).click();
  await page.getByRole('cell', { name: 'Name' }).click();
  await page.getByRole('cell', { name: 'Condition' }).click();
  await page.getByRole('cell', { name: 'Actions' }).click();
  await page.getByRole('link', { name: 'Next.js Application Template' }).click();
  await page.getByRole('link', { name: 'Add Stuff' }).click();
  await page.getByRole('link', { name: 'List Stuff' }).click();
  await page.getByRole('button', { name: 'john@foo.com' }).click();
  await page.getByRole('button', { name: 'john@foo.com' }).click();
  await page.goto('http://localhost:3000/list');
});
