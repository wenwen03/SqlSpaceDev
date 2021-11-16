import { useSelector } from 'react-redux';
import { MissionState } from './slice';

export const useMissionStateState = () => {
  return useSelector((state: { mission: MissionState }) => state);
};