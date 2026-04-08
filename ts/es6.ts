interface ResponseInterface {
  data?: {
    status?: string;
  };
}

const user = { firstName: 'Ana', role: 'QE' };
const { firstName } = user;
const tags = ['api', 'smoke'];
const allTags = [...tags, 'critical'];
function logAll(...items: any[]) {}
const response: ResponseInterface = {};
const responseStatus = response?.data?.status ?? 'unknown';

for (const tag of allTags) {
  console.log(tag);
}
