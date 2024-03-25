// interface ServerQuestionResponse {
//     [id: string]: {
//       question: string;
//       options: string[];
//     };
//   }
  

export type ServerQuestionResponse = {
    [id: string]: {
      question: string;
      options: string[];
    };
  }
  