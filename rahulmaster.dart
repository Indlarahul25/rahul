
import 'package:flutter/material.dart';

void main() {
  runApp(const JobBoardApp());
}

class JobBoardApp extends StatelessWidget {
  const JobBoardApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Job Board',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        scaffoldBackgroundColor: const Color(0xFFF5F7FB),
        useMaterial3: true,
      ),
      home: const JobListScreen(),
    );
  }
}

// JOB MODEL
class Job {
  final String title;
  final String company;
  final String location;
  final String type;
  final String salary;
  final String description;
  final String requirements;

  const Job({
    required this.title,
    required this.company,
    required this.location,
    required this.type,
    required this.salary,
    required this.description,
    required this.requirements,
  });
}

// LOCAL JOB DATA
final List<Job> jobs = [
  Job(
    title: 'Flutter Developer',
    company: 'Google',
    location: 'Bangalore',
    type: 'Full Time',
    salary: '₹6 - 10 LPA',
    description:
        'Develop modern mobile applications using Flutter and Dart. '
        'Work with designers and backend developers to build quality apps.',
    requirements:
        'Flutter, Dart, REST APIs, Firebase, Git and problem-solving skills.',
  ),
  Job(
    title: 'UI/UX Designer',
    company: 'Infosys',
    location: 'Hyderabad',
    type: 'Internship',
    salary: '₹15,000/month',
    description:
        'Design user-friendly mobile and web interfaces. '
        'Create wireframes, prototypes and user experiences.',
    requirements:
        'Figma, UI design, UX research and creativity.',
  ),
  Job(
    title: 'Python Developer',
    company: 'TCS',
    location: 'Chennai',
    type: 'Full Time',
    salary: '₹5 - 8 LPA',
    description:
        'Build backend applications and develop software solutions '
        'using Python and modern development frameworks.',
    requirements:
        'Python, Django, SQL, APIs and programming fundamentals.',
  ),
  Job(
    title: 'Web Developer',
    company: 'Wipro',
    location: 'Guntur',
    type: 'Part Time',
    salary: '₹12,000/month',
    description:
        'Create responsive websites and maintain web applications '
        'using modern frontend technologies.',
    requirements:
        'HTML, CSS, JavaScript and basic React knowledge.',
  ),
];

// JOB LIST SCREEN
class JobListScreen extends StatefulWidget {
  const JobListScreen({super.key});

  @override
  State<JobListScreen> createState() => _JobListScreenState();
}

class _JobListScreenState extends State<JobListScreen> {
  String searchText = '';
  String selectedLocation = 'All';
  String selectedType = 'All';

  List<Job> get filteredJobs {
    return jobs.where((job) {
      final matchesSearch =
          job.title.toLowerCase().contains(searchText.toLowerCase()) ||
          job.company.toLowerCase().contains(searchText.toLowerCase());

      final matchesLocation =
          selectedLocation == 'All' ||
          job.location == selectedLocation;

      final matchesType =
          selectedType == 'All' || job.type == selectedType;

      return matchesSearch && matchesLocation && matchesType;
    }).toList();
  }

  @override
  Widget build(BuildContext context) {
    final locations = [
      'All',
      ...jobs.map((job) => job.location).toSet()
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Find Your Dream Job',
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(
              decoration: InputDecoration(
                hintText: 'Search job or company...',
                prefixIcon: const Icon(Icons.search),
                filled: true,
                fillColor: Colors.white,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              onChanged: (value) {
                setState(() => searchText = value);
              },
            ),

            const SizedBox(height: 15),

            Row(
              children: [
                Expanded(
                  child: DropdownButtonFormField<String>(
                    value: selectedLocation,
                    decoration: const InputDecoration(
                      labelText: 'Location',
                      filled: true,
                      fillColor: Colors.white,
                    ),
                    items: locations.map((location) {
                      return DropdownMenuItem(
                        value: location,
                        child: Text(location),
                      );
                    }).toList(),
                    onChanged: (value) {
                      setState(() {
                        selectedLocation = value!;
                      });
                    },
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: DropdownButtonFormField<String>(
                    value: selectedType,
                    decoration: const InputDecoration(
                      labelText: 'Job Type',
                      filled: true,
                      fillColor: Colors.white,
                    ),
                    items: ['All', 'Full Time', 'Part Time', 'Internship']
                        .map((type) {
                      return DropdownMenuItem(
                        value: type,
                        child: Text(type),
                      );
                    }).toList(),
                    onChanged: (value) {
                      setState(() {
                        selectedType = value!;
                      });
                    },
                  ),
                ),
              ],
            ),

            const SizedBox(height: 20),

            Expanded(
              child: filteredJobs.isEmpty
                  ? const Center(child: Text('No jobs found'))
                  : ListView.builder(
                      itemCount: filteredJobs.length,
                      itemBuilder: (context, index) {
                        final job = filteredJobs[index];

                        return Card(
                          color: Colors.white,
                          elevation: 2,
                          margin: const EdgeInsets.only(bottom: 12),
                          child: ListTile(
                            contentPadding: const EdgeInsets.all(14),
                            leading: const CircleAvatar(
                              backgroundColor: Colors.blue,
                              child: Icon(
                                Icons.business,
                                color: Colors.white,
                              ),
                            ),
                            title: Text(
                              job.title,
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            subtitle: Padding(
                              padding: const EdgeInsets.only(top: 8),
                              child: Text(
                                '${job.company}\n'
                                '${job.location} • ${job.type}\n'
                                '${job.salary}',
                              ),
                            ),
                            isThreeLine: true,
                            trailing: const Icon(Icons.arrow_forward_ios),
                            onTap: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (_) =>
                                      JobDetailScreen(job: job),
                                ),
                              );
                            },
                          ),
                        );
                      },
                    ),
            ),
          ],
        ),
      ),
    );
  }
}

// JOB DETAIL SCREEN
class JobDetailScreen extends StatelessWidget {
  final Job job;

  const JobDetailScreen({super.key, required this.job});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Job Details'),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              job.title,
              style: const TextStyle(
                fontSize: 25,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 10),
            Text(
              job.company,
              style: const TextStyle(
                fontSize: 19,
                color: Colors.blue,
              ),
            ),
            const SizedBox(height: 20),
            infoRow(Icons.location_on, job.location),
            infoRow(Icons.work, job.type),
            infoRow(Icons.currency_rupee, job.salary),

            const SizedBox(height: 25),
            const Text(
              'Job Description',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 10),
            Text(job.description),

            const SizedBox(height: 25),
            const Text(
              'Requirements',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 10),
            Text(job.requirements),

            const SizedBox(height: 35),

            SizedBox(
              width: double.infinity,
              height: 50,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.blue,
                  foregroundColor: Colors.white,
                ),
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => ApplicationScreen(job: job),
                    ),
                  );
                },
                child: const Text(
                  'Apply Now',
                  style: TextStyle(fontSize: 17),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget infoRow(IconData icon, String value) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Row(
        children: [
          Icon(icon, color: Colors.blue),
          const SizedBox(width: 10),
          Text(value),
        ],
      ),
    );
  }
}

// APPLICATION FORM
class ApplicationScreen extends StatefulWidget {
  final Job job;

  const ApplicationScreen({super.key, required this.job});

  @override
  State<ApplicationScreen> createState() => _ApplicationScreenState();
}

class _ApplicationScreenState extends State<ApplicationScreen> {
  final _formKey = GlobalKey<FormState>();

  final nameController = TextEditingController();
  final emailController = TextEditingController();
  final phoneController = TextEditingController();
  final resumeController = TextEditingController();

  @override
  void dispose() {
    nameController.dispose();
    emailController.dispose();
    phoneController.dispose();
    resumeController.dispose();
    super.dispose();
  }

  Widget buildField(
    String label,
    TextEditingController controller, {
    String? Function(String?)? validator,
    TextInputType keyboardType = TextInputType.text,
  }) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 18),
      child: TextFormField(
        controller: controller,
        keyboardType: keyboardType,
        decoration: InputDecoration(
          labelText: label,
          filled: true,
          fillColor: Colors.white,
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(12),
          ),
        ),
        validator: validator,
      ),
    );
  }

  void submitApplication() {
    if (_formKey.currentState!.validate()) {
      showDialog(
        context: context,
        builder: (context) => AlertDialog(
          title: const Text('Application Submitted!'),
          content: Text(
            'Thank you ${nameController.text}. '
            'Your application for ${widget.job.title} '
            'at ${widget.job.company} has been received.',
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context);
                Navigator.pop(context);
                Navigator.pop(context);
              },
              child: const Text('OK'),
            ),
          ],
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Job Application'),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Apply for ${widget.job.title}',
                style: const TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 25),

              buildField(
                'Full Name',
                nameController,
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return 'Please enter your name';
                  }
                  return null;
                },
              ),

              buildField(
                'Email Address',
                emailController,
                keyboardType: TextInputType.emailAddress,
                validator: (value) {
                  if (value == null ||
                      !RegExp(r'^[^@]+@[^@]+\.[^@]+$')
                          .hasMatch(value.trim())) {
                    return 'Enter a valid email address';
                  }
                  return null;
                },
              ),

              buildField(
                'Phone Number',
                phoneController,
                keyboardType: TextInputType.phone,
                validator: (value) {
                  if (value == null ||
                      !RegExp(r'^[0-9]{10}$').hasMatch(value.trim())) {
                    return 'Enter a valid 10-digit phone number';
                  }
                  return null;
                },
              ),

              buildField(
                'Resume Link',
                resumeController,
                keyboardType: TextInputType.url,
                validator: (value) {
                  if (value == null ||
                      !Uri.tryParse(value.trim())!.hasAbsolutePath) {
                    return 'Enter a valid resume URL';
                  }
                  return null;
                },
              ),

              const SizedBox(height: 15),

              SizedBox(
                width: double.infinity,
                height: 52,
                child: ElevatedButton(
                  onPressed: submitApplication,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.blue,
                    foregroundColor: Colors.white,
                  ),
                  child: const Text(
                    'Submit Application',
                    style: TextStyle(fontSize: 17),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
