// Fix: Added React import to resolve "Cannot find namespace 'React'" error for React.ReactNode
import React from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  storeUrl: string;
  message: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}