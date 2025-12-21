import { Lock, FileText, MessageSquare, Upload, Calendar, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';

export function Portal() {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Lock className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              لوحة العميل
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              تابع تقدم مشروعك وتواصل مع فريق التطوير
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <Card className="p-12 text-center" glass>
            <Lock className="w-20 h-20 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              منطقة محمية
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
              يتطلب تسجيل الدخول للوصول إلى لوحة التحكم
            </p>
            <p className="text-secondary-600 dark:text-secondary-400">
              إذا كنت عميلاً حالياً، يرجى التواصل معنا للحصول على بيانات الدخول
            </p>
          </Card>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-8 text-center">
              ما يمكنك فعله في لوحة العميل
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: CheckCircle,
                  title: 'تتبع المشروع',
                  description: 'راقب تقدم مشروعك في الوقت الفعلي',
                },
                {
                  icon: Calendar,
                  title: 'المواعيد والمراحل',
                  description: 'اطلع على الجدول الزمني للتسليم',
                },
                {
                  icon: MessageSquare,
                  title: 'التواصل المباشر',
                  description: 'تواصل مع فريق التطوير',
                },
                {
                  icon: FileText,
                  title: 'المستندات',
                  description: 'الوصول إلى جميع مستندات المشروع',
                },
                {
                  icon: Upload,
                  title: 'مشاركة الملفات',
                  description: 'رفع وتنزيل الملفات بسهولة',
                },
                {
                  icon: CheckCircle,
                  title: 'الموافقات',
                  description: 'راجع ووافق على مراحل العمل',
                },
              ].map((feature, index) => (
                <Card key={index} className="p-6" hover>
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
