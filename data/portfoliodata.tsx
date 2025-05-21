export const portfolioItems = [
    {
      id: 'cert-python-ml',
      title: 'Python for ML Cert.',
      description: 'Learned Python fundamentals, data manipulation with Pandas, and core ML algorithms with Scikit-learn.', // Short summary for list view
      date: 'March 2024',
      type: 'certificate',
      issuingBody: 'Coursera (DeepLearning.AI)',
      link: 'https://www.coursera.org/account/accomplishment/certificate/YOUR_CERT_ID_PYTHON_LINK', // This will be ctaLink
      thumbnail: '/images/IMG_4106.jpg', 
      src: '/images/IMG_4106.jpg',       // Main image for expanded view (can be same as thumbnail or higher res)
      ctaText: 'View Certificate',
      content: () => ( // Detailed "what it taught me" for expanded view (can be optional)
          <p>
              This certification provided a robust foundation in Python, covering advanced topics like decorators and generators.
              I gained extensive experience in data cleaning, transformation, and analysis using the Pandas library,
              which included handling missing data, merging dataframes, and performing aggregate operations.
              For machine learning, the course covered supervised learning algorithms such as linear regression,
              logistic regression, decision trees, and support vector machines, along with unsupervised learning
              techniques like k-means clustering. I also learned about model evaluation metrics and basic
              feature engineering. This comprehensive learning experience significantly enhanced my
              data science and machine learning capabilities.
          </p>
      ),
    },
    {
      id: 'cert-aws-cloud',
      title: 'AWS Cloud Practitioner',
      description: 'Foundational understanding of AWS Cloud concepts and services.',
      date: 'Feb 2024',
      type: 'certificate',
      issuingBody: 'Amazon Web Services (AWS)',
      link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
      thumbnail: '/images/IMG_4108.jpg',
      src: '/images/IMG_4108.jpg',
      ctaText: 'View Certificate',
      content: () => (
        <p>
          This certification validates my foundational understanding of AWS cloud concepts, core AWS services,
          security, architecture, pricing, and support. It covers cloud computing benefits, cloud deployment models,
          and the shared responsibility model.
        </p>
      ),
    },
    {
      id: 'cert-react-adv',
      title: 'Advanced React Development',
      description: 'Mastered advanced React patterns, hooks, and performance optimization.',
      date: 'Jan 2024',
      type: 'certificate',
      issuingBody: 'Udemy (Academind)',
      link: 'https://www.udemy.com/certificate/react-advanced/',
      thumbnail: '/images/IMG_4401.jpg',
      src: '/images/IMG_4401.jpg',
      ctaText: 'View Certificate',
      content: () => (
        <p>
          This course dove deep into React, covering advanced topics like custom hooks, context API,
          React Router, Redux Toolkit, and performance optimizations using `React.memo`, `useCallback`, and `useMemo`.
          It also included building complex single-page applications.
        </p>
      ),
    },
    {
      id: 'cert-js-mastery',
      title: 'JavaScript Mastery',
      description: 'Comprehensive course on modern JavaScript features and paradigms.',
      date: 'Dec 2023',
      type: 'certificate',
      issuingBody: 'freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/js-mastery',
      thumbnail: '/images/IMG_4439.jpg',
      src: '/images/IMG_4439.jpg',
      ctaText: 'View Certificate',
      // No 'content' for this one, to show how it can be handled
    },
    {
      id: 'cert-docker',
      title: 'Docker & Kubernetes Fundamentals',
      description: 'Learned containerization with Docker and orchestration with Kubernetes.',
      date: 'Nov 2023',
      type: 'certificate',
      issuingBody: 'Pluralsight',
      link: 'https://www.pluralsight.com/courses/docker-kubernetes',
      thumbnail: '/images/IMG_4490.jpg',
      src: '/images/IMG_4490.jpg',
      ctaText: 'View Certificate',
      content: () => (
        <p>
          This course provided a practical introduction to Docker for building and running containers,
          and Kubernetes for deploying, scaling, and managing containerized applications.
          It covered Dockerfiles, Docker Compose, Kubernetes manifests, and basic cluster operations.
        </p>
      ),
    },
    {
      id: 'cert-ml-basics',
      title: 'Machine Learning Basics',
      description: 'Introduction to ML concepts and algorithms.',
      date: 'Oct 2023',
      type: 'certificate',
      issuingBody: 'Google',
      link: 'https://developers.google.com/machine-learning/crash-course',
      thumbnail: '/images/IMG_4101.jpg',
      src: '/images/IMG_4101.jpg',
      ctaText: 'View Certificate',
      // No 'content' for this one
    },
    {
      id: 'cert-data-structures',
      title: 'Data Structures & Algorithms',
      description: 'Foundational concepts in DSA with Python.',
      date: 'Sept 2023',
      type: 'certificate',
      issuingBody: 'AlgoExpert',
      link: 'https://www.algoexpert.io/',
      thumbnail: '/images/IMG_4102.jpg',
      src: '/images/IMG_4102.jpg',
      ctaText: 'View Certificate',
      content: () => (
        <p>
          This certification covered essential data structures like arrays, linked lists, trees, graphs,
          and algorithms such as sorting, searching, dynamic programming, and greedy algorithms,
          all implemented and analyzed in Python.
        </p>
      ),
    },
    {
      id: 'cert-figma',
      title: 'Figma UI/UX Design',
      description: 'Mastering modern UI/UX design principles with Figma.',
      date: 'Aug 2023',
      type: 'certificate',
      issuingBody: 'DesignCode',
      link: 'https://designcode.io/figma-handbook',
      thumbnail: '/images/IMG_4103.jpg',
      src: '/images/IMG_4103.jpg',
      ctaText: 'View Certificate',
      // No 'content' for this one
    },
    {
      id: 'cert-blockchain-foundations',
      title: 'Blockchain Foundations',
      description: 'Understanding the core concepts of blockchain technology.',
      date: 'July 2023',
      type: 'certificate',
      issuingBody: 'IBM',
      link: 'https://www.ibm.com/training/cloud/blockchain',
      thumbnail: '/images/IMG_4104.jpg',
      src: '/images/IMG_4104.jpg',
      ctaText: 'View Certificate',
      content: () => (
        <p>
          This course provided a comprehensive overview of blockchain technology,
          including its underlying principles, cryptographic foundations, consensus mechanisms,
          and practical applications in various industries.
        </p>
      ),
    },
];