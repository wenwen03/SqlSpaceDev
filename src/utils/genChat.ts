import Character from '@/types/Character';
import Chat from '@/types/Chat';

/**
 * Chat生成
 * @param speaker 発言者
 * @param comment 発言内容
 * @param condition 発火条件
 * @returns Chat
 */
export default function(
  speaker: Character,
  comment: string, 
  condition?: string,
): Chat {
  return { 
    speaker,
    comment,
    condition
  }
}
