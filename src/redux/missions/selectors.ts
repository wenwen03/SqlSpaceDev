import { useSelector } from 'react-redux';
import { MissionState } from './slice';

export const useMissionState = () => {
  return useSelector((state: { mission: MissionState }) => state);
};