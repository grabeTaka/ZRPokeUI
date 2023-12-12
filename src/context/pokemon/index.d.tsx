/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { InputHTMLAttributes, ReactNode } from 'react'

export interface importFilesContextProps
  extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}
