import { writable } from 'svelte/store';

export const categoryOptions = writable([]);
export const selectedOption = writable('');
export const artObjects = writable([]);
export const isLoading = writable(false);
