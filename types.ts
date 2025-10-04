export enum CreationType {
  Story = 'story',
  Prayer = 'prayer',
}

export interface GenerationParams {
    creationType: CreationType;
    mainPrompt: string;
    titlePrompt: string;
    descriptionPrompt: string;
    thumbnailPrompt: string;
    characterCount: number;
    language: string;
}