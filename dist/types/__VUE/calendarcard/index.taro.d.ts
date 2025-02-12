import CalendarCard from './calendar-card.taro.vue';
import type { ComponentPublicInstance } from 'vue';
export type { CalendarCardProps } from './calendar-card.taro.vue';
export type { CalendarCardType, CalendarCardDay, CalendarCardMonth, CalendarCardValue } from './types';
export type CalendarCardInstance = ComponentPublicInstance & InstanceType<typeof CalendarCard>;
export { CalendarCard, CalendarCard as default };
