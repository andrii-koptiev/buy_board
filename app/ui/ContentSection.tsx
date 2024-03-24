import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
const ContentSection = ({ children }: Props) => (
  <section className="bg-white p-8 rounded-3xl h-full">{children}</section>
);
export default ContentSection;
