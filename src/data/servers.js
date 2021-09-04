export const serversCollection = {
  name: 'Servers',
  areas: [
    {
      skills: [
        {
          name: 'Architectural Models',
          description: {
            text: 'Learn about the fundamental architectural server models.',
            links: [
              ['Server Architecture', 'https://www.techopedia.com/definition/30262/server-architecture'],
              ['Youtube - Architectural model', 'https://www.youtube.com/watch?v=SKtR7NVxYFA'],
              ['Architectural Model', 'https://www.sciencedirect.com/topics/computer-science/architectural-model'],
              ['Distributed Systems: Models and Design', 'http://www2.imm.dtu.dk/courses/02220/2018/L3/Models.pdf'],
            ],
          },
          skills: [
            {
              name: 'Client-Server',
              description: {
                text: 'Learn about the client-server model.',
                links: [
                  ['Wikipedia - Client-server model', 'https://en.wikipedia.org/wiki/Client%E2%80%93server_model'],
                  ['Client Server Architecture', 'https://cio-wiki.org/wiki/Client_Server_Architecture'],
                  ['Understanding What Client Server Architecture Is All About', 'https://freefeast.info/general-it-articles/client-server-architecture/'],
                  ['Wikipedia - Client-server', 'https://simple.wikipedia.org/wiki/Client-server'],
                  ['Client-server model (client-server architecture)', 'https://searchnetworking.techtarget.com/definition/client-server'],
                  ['Client-Server Model', 'https://www.techopedia.com/definition/18321/client-server-model'],
                  ['Learn more about Client-Server Model', 'https://www.sciencedirect.com/topics/computer-science/client-server-model'],
                ],
              },
            },
            {
              name: 'Proxy Server',
              description: {
                text: 'Learn about the proxy-server model.',
                links: [
                  ['Wikipedia - Proxy Server', 'https://en.wikipedia.org/wiki/Proxy_server'],
                  ['Youtube - What is a Proxy Server?', 'https://www.youtube.com/watch?v=5cPIukqXe5w'],
                  ['What is a Proxy Server and How Does it Work?', 'https://www.varonis.com/blog/what-is-a-proxy-server/'],
                  ['Proxy Server Definition', 'https://whatis.techtarget.com/definition/proxy-server'],
                  ['What is a proxy server?', 'https://www.itpro.co.uk/server-storage/30246/what-is-a-proxy-server'],
                ],
              },
            },
            {
              name: 'Peer-To-Peer',
              description: {
                text: 'Learn about the peer-to-peer model.',
                links: [
                  ['Wikipedia - Peer-to-peer', 'https://en.wikipedia.org/wiki/Peer-to-peer'],
                  ['Youtube - What is a Peer to Peer Network? ', 'https://www.youtube.com/watch?v=ie-qRQIQT4I'],
                  ["What's a Peer-to-Peer (P2P) Network?", 'https://www.computerworld.com/article/2588287/networking-peer-to-peer-network.html'],
                  ['Peer-to-peer (P2P)', 'https://searchnetworking.techtarget.com/definition/peer-to-peer'],
                  ['Make a P2P connection in 10 minutes', 'https://dev.to/carloslfu/make-a-p2p-connection-in-10-minutes-4b32'],
                ],
              },
            },
          ],
        },
        {
          name: 'Middleware',
          description: {
            text: 'Learn about middleware.',
            links: [
              ['Wikipedia - Middleware', 'https://en.wikipedia.org/wiki/Middleware'],
              ['Middleware Definition', 'https://searchapparchitecture.techtarget.com/definition/middleware'],
              ['Quora - Why is Middleware important?', 'https://www.quora.com/Why-is-Middleware-important'],
              ['What is middleware?', 'https://www.redhat.com/en/topics/middleware/what-is-middleware'],
              ['What is Middleware? Technology’s Go-to Middleman', 'https://www.talend.com/resources/what-is-middleware/'],
            ],
          },
        },
        {
          name: 'Request-Reply Protocol',
          description: {
            text: 'Learn how computers communicate with eachother using the request-reply protocol.',
            links: [
              ['Wikipedia - Request Response', 'https://en.wikipedia.org/wiki/Request%E2%80%93response'],
              ['Youtube - Event-Driven Architecture', 'https://www.youtube.com/watch?v=3bxAm3XIFmk'],
              ['Request/Reply', 'https://solace.com/samples/solace-samples-jms/request-reply/'],
              ['Enterprise Integration - Request-Reply', 'http://www.informit.com/articles/article.aspx?p=1398616&seqNum=4'],
            ],
          },
          skills: [
            {
              name: 'UDP',
              description: {
                text: 'Learn about the UDP transport layer protocol.',
                links: [
                  ['UDP (User Datagram Protocol)', 'https://searchnetworking.techtarget.com/definition/UDP-User-Datagram-Protocol'],
                  ['Wikipedia - User Datagram Protocol', 'https://en.wikipedia.org/wiki/User_Datagram_Protocol'],
                  ['User Datagram Protocol (UDP)', 'https://www.techopedia.com/definition/13460/user-datagram-protocol-udp'],
                  ['Youtube - Explained! UDP and TCP', 'https://www.youtube.com/watch?v=1LYqtkgtSPU'],
                  ['User Datagram Protocol', 'https://www.geeksforgeeks.org/user-datagram-protocol-udp/'],
                ],
              },
            },
            {
              name: 'TCP',
              description: {
                text: 'Learn about the TCP transport layer protocol.',
                links: [
                  ['TCP (Transmission Control Protocol)', 'https://searchnetworking.techtarget.com/definition/TCP'],
                  ['Wikipedia - Transmission Control Protocol', 'https://en.wikipedia.org/wiki/Transmission_Control_Protocol'],
                  ['TCP/IP (Transmission Control Protocol/Internet Protocol)', 'https://searchnetworking.techtarget.com/definition/TCP-IP'],
                  ['Services and Segment structure in TCP', 'https://www.geeksforgeeks.org/services-and-segment-structure-in-tcp/'],
                  ['TCP and UDP in Transport Layer', 'https://www.geeksforgeeks.org/tcp-and-udp-in-transport-layer/'],
                ],
              },
            },
          ],
        },
        {
          name: 'REST API',
          description: {
            text: 'Learn how an API can be designed to be RESTful.',
            links: [
              ['Wikipeia - Representational state transfer', 'https://en.wikipedia.org/wiki/Representational_state_transfer'],
              ['Learn REST: A RESTful Tutorial', 'https://www.restapitutorial.com/'],
              ['Youtube - REST API concepts and examples', 'https://www.youtube.com/watch?v=7YcW25PHnAA'],
              ['REST API Tutorial', 'https://restfulapi.net/'],
              ['What is a REST API?', 'https://www.mulesoft.com/resources/api/what-is-rest-api-design'],
            ],
          },
          skills: [
            {
              name: 'CRUD',
              description: {
                text: 'Learn about the CRUD operations.',
                links: [
                  ['Wikipedia - Create, read, update and delete', 'https://en.wikipedia.org/wiki/Create,_read,_update_and_delete'],
                  ['Codecademy - What is CRUD?', 'https://www.codecademy.com/articles/what-is-crud'],
                  ['What is the Difference between REST and CRUD?', 'https://www.bmc.com/blogs/rest-vs-crud-whats-the-difference/'],
                  ['Youtube - Introduction to CRUD Operations', 'https://www.youtube.com/watch?v=Lyi8SoVdkhM'],
                  ['REST was NEVER about CRUD', 'https://tyk.io/rest-never-crud/'],
                ],
              },
            },
          ],
        },
        {
          name: 'Express',
          description: {
            text: 'Learn about the Node.js web application framework called Express.',
            links: [
              ['Express', 'https://expressjs.com/'],
              ['Tutorialspoint - Express Framework', 'https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm'],
              ['Youtube - Express.js & Node.js Course for Beginners', 'https://www.youtube.com/watch?v=G8uL0lFFoN0'],
              ['Understanding Node.js & Express.js fundamentals', 'https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1'],
              ['Wikipedia - Express.js', 'https://en.wikipedia.org/wiki/Express.js'],
            ],
          },
        },
        {
          name: 'GraphQL',
          description: {
            text: 'Learn how to use the GraphQL query language.',
            links: [
              ['GraphQL', 'https://graphql.org/'],
              ['Youtube - Introduction to GraphQL', 'https://www.youtube.com/watch?v=Y0lDGjwRYKw'],
              ['Github - GraphQL Specification', 'https://github.com/graphql/graphql-spec'],
              ['The Fullstack Tutorial for GraphQL', 'https://www.howtographql.com/'],
            ],
          },
        },
        {
          name: 'GNU/Linux',
          description: {
            text: 'Learn about the GNU/Linux operating system',
            links: [
              ['Linux and the GNU System', 'https://www.gnu.org/gnu/linux-and-gnu.en.html'],
              ['Wikipedia - GNU/Linux naming controversy', 'https://en.wikipedia.org/wiki/GNU/Linux_naming_controversy'],
              ['What is GNU/Linux?', 'https://www.debian.org/releases/stable/amd64/ch01s02.en.html'],
              ['GNU Linux', 'https://searchdatacenter.techtarget.com/definition/GNU-Linux'],
            ],
          },
        },
        {
          name: 'Docker',
          description: {
            text: 'Learn how to use Docker.',
            links: [
              ['Docker', 'https://www.docker.com/'],
              ['Wikipedia - Docker (software)', 'https://en.wikipedia.org/wiki/Docker_(software)'],
              ['Docker for beginners', 'https://docker-curriculum.com/'],
              ['What is Docker?', 'https://opensource.com/resources/what-docker'],
              ['Get Started, Part 1: Orientation and setup', 'https://docs.docker.com/get-started/'],
            ],
          },
        },
        {
          name: 'SSH',
          description: {
            text: 'Learn how to use SSH and learn how to connect to a device using an SSH client.',
            links: [
              ['Wikipedia - Secure Shell', 'https://en.wikipedia.org/wiki/Secure_Shell'],
              ['Secure Shell (SSH)', 'https://searchsecurity.techtarget.com/definition/Secure-Shell'],
              ['SSH command in Linux with Examples', 'https://www.geeksforgeeks.org/ssh-command-in-linux-with-examples/'],
              ['How to Establish a Connection Using SSH', 'https://help.ubnt.com/hc/en-us/articles/218850057-Intro-to-Networking-How-to-Establish-a-Connection-Using-SSH'],
            ],
          },
        },
      ],
    },
  ],
};
