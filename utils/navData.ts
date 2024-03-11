import { NavSections } from '@/enums';
import { NavData } from '@/types';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { ReceiptPercentIcon } from '@heroicons/react/24/outline';

export const navData: NavData[] = [
  {
    name: NavSections.CLIENTS,
    Icon: UserGroupIcon
  },
  {
    name: NavSections.ORDERS,
    Icon: ReceiptPercentIcon
  }
];
