export const swaggerDocument = {
  swagger: '2.0',
  info: {
    title: 'My Grades Control API',
    version: 'beta 1.0.0',
    description:
      'My Grades Control. API para controlar notas de alunos em matérias de um curso. Existem endpoints para criação, atualização, exclusão e consulta de notas, aqui chamadas de grades. As grades deverão ser salvas em um arquivo json, chamado “grades.json”.',
  },
  host: 'localhost:3000',
  tags: [
    {
      name: 'grades',
      description: 'grades information',
    },
  ],
  paths: {
    '/grades': {
      post: {
        tags: ['grades'],
        summary: 'add a new grade',
        description: 'add a new grade',
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              type: 'string',
            },
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },
      put: {
        tags: ['grades'],
        summary: 'update a grade information',
        description: 'update a grade information',
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              type: 'string',
            },
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },
    },
    '/grades/{id}': {
      get: {
        tags: ['grades'],
        summary: 'Get grade by id',
        description: 'Get grade by id',
        produces: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            description: 'grade Id',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              type: 'string',
            },
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },

      delete: {
        tags: ['grades'],
        summary: 'delete grade by id',
        description: 'delete grade by id',
        produces: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            description: 'grade Id',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              type: 'string',
            },
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },
    },

    '/grades/totalGrade/{student}/{subject}': {
      get: {
        tags: ['grades'],
        summary: 'Get total grade by student and subject',
        description: 'Get total grade by student and subject',
        produces: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'student',
            description: 'student name',
            required: true,
            type: 'string',
          },
          {
            in: 'path',
            name: 'subject',
            description: 'subject',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              type: 'string',
            },
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },
    },

    '/grades/avggrades/{subject}/{type}': {
      get: {
        tags: ['grades'],
        summary: 'Get average grade for subject and type',
        description: 'Get average grade for subject and type',
        produces: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'subject',
            description: 'subject',
            required: true,
            type: 'string',
          },
          {
            in: 'path',
            name: 'type',
            description: 'type',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              type: 'string',
            },
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },
    },

    '/grades/top3/{subject}/{type}': {
      get: {
        tags: ['grades'],
        summary: 'Get top 3 grades from subject and type',
        description: 'Get top 3 grades from subject and type',
        produces: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'subject',
            description: 'subject',
            required: true,
            type: 'string',
          },
          {
            in: 'path',
            name: 'type',
            description: 'type',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              type: 'string',
            },
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },
    },
  },
  definitions: {
    grades: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          example: '23',
        },
        student: {
          type: 'string',
          example: 'Guilherme Assis',
        },
        subject: {
          type: 'string',
          example: 'Matemática',
        },
        type: {
          type: 'string',
          example: 'Prova final',
        },
        value: {
          type: 'number',
          example: '10',
        },
        timestamp: {
          type: 'date',
          example: '2020-05-19T18:21:24.964Z',
        },
      },
    },
  },
};
