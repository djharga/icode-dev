import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Portfolio() {
  const categories = ['الكل', 'Fintech', 'SaaS', 'E-commerce', 'أمان', 'أنظمة مخصصة', 'موبايل'];
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const projects = [
    {
      title: 'منصة PayFlow',
      category: 'Fintech',
      description: 'منصة مالية متكاملة لإدارة المدفوعات الرقمية والمحافظ الإلكترونية مع نظام KYC وAML متقدم',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      clientValue: 'معالجة أكثر من 100,000 معاملة شهرياً بأمان عالي',
    },
    {
      title: 'نظام ProjectHub',
      category: 'SaaS',
      description: 'منصة SaaS لإدارة المشاريع والفرق مع ميزات تعاون متقدمة وتتبع الوقت والميزانيات',
      techStack: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
      clientValue: 'زيادة إنتاجية الفرق بنسبة 45% وتوفير 20 ساعة عمل أسبوعياً',
    },
    {
      title: 'متجر LuxeStyle',
      category: 'E-commerce',
      description: 'متجر إلكتروني فاخر للأزياء مع تجربة تسوق استثنائية ونظام توصيات ذكي',
      techStack: ['React', 'Express', 'MongoDB', 'Stripe', 'Cloudinary'],
      clientValue: 'زيادة المبيعات بنسبة 320% خلال 6 أشهر',
    },
    {
      title: 'نظام SecureVault',
      category: 'أمان',
      description: 'نظام إدارة أسرار وكلمات مرور للمؤسسات مع تشفير متقدم ومصادقة ثنائية',
      techStack: ['Rust', 'PostgreSQL', 'React', 'WebAssembly'],
      clientValue: 'حماية بيانات أكثر من 5000 موظف بأمان من الدرجة العسكرية',
    },
    {
      title: 'تطبيق HealthTrack',
      category: 'موبايل',
      description: 'تطبيق موبايل لتتبع الصحة واللياقة مع مدرب AI وخطط تغذية مخصصة',
      techStack: ['React Native', 'Firebase', 'TensorFlow', 'Node.js'],
      clientValue: 'أكثر من 50,000 تحميل مع تقييم 4.8 نجوم',
    },
    {
      title: 'نظام ERP للمصانع',
      category: 'أنظمة مخصصة',
      description: 'نظام ERP شامل لإدارة الإنتاج والمخزون والمبيعات والموارد البشرية',
      techStack: ['Vue.js', 'Django', 'PostgreSQL', 'Docker', 'Kubernetes'],
      clientValue: 'خفض تكاليف التشغيل بنسبة 35% وزيادة الكفاءة بنسبة 60%',
    },
    {
      title: 'منصة LearnPro',
      category: 'SaaS',
      description: 'منصة تعليمية تفاعلية مع فصول افتراضية وإدارة محتوى ومتابعة تقدم الطلاب',
      techStack: ['React', 'WebRTC', 'Node.js', 'MongoDB', 'AWS'],
      clientValue: 'خدمة أكثر من 10,000 طالب بتجربة تعليمية سلسة',
    },
    {
      title: 'نظام SmartInventory',
      category: 'أنظمة مخصصة',
      description: 'نظام ذكي لإدارة المخزون مع توقعات AI وتنبيهات تلقائية',
      techStack: ['Angular', 'Python', 'MySQL', 'TensorFlow', 'Docker'],
      clientValue: 'تقليل الفاقد بنسبة 40% وتحسين دقة المخزون إلى 99%',
    },
  ];

  const filteredProjects = selectedCategory === 'الكل'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أعمالنا المميزة
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              نماذج من مشاريعنا الناجحة التي ساعدت عملاءنا على تحقيق أهدافهم الرقمية وتنمية أعمالهم
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden" hover>
                <div className="h-48 gradient-primary opacity-20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-noise" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-secondary-700 dark:text-secondary-300 mb-3">
                      التقنيات المستخدمة:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-secondary-200 dark:border-secondary-700">
                    <h4 className="text-sm font-bold text-secondary-700 dark:text-secondary-300 mb-2">
                      القيمة المقدمة:
                    </h4>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      {project.clientValue}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50 dark:bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              نبني المشاريع بشغف واحترافية
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
              كل مشروع هو فرصة لنا لتقديم حلول مبتكرة وفعالة تساعد عملاءنا على النجاح. نؤمن بأن التقنية يجب أن تخدم أهداف العمل، وليس العكس.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-2">150+</div>
              <p className="text-secondary-600 dark:text-secondary-300">مشروع منجز</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-2">100+</div>
              <p className="text-secondary-600 dark:text-secondary-300">عميل سعيد</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-2">98%</div>
              <p className="text-secondary-600 dark:text-secondary-300">نسبة الرضا</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
