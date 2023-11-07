// See https://kit.svelte.dev/docs/types#app

import type OpenAI from 'openai';

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      ai: OpenAI;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
