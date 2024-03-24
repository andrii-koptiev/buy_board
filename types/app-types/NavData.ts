import { NavSections } from '@/enums';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavData {
  name: NavSections;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
}
