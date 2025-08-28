import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pollChoice, setPollChoice] = useState('');

  const methodicalMaterials = [
    {
      title: 'Интерактивные методы преподавания математики',
      description: 'Авторская методика для 5-6 классов с использованием игровых элементов',
      author: 'Иванова А.С.',
      date: '15.11.2024',
      category: 'Математика',
      downloads: 127
    },
    {
      title: 'Проектная деятельность в начальной школе',
      description: 'Комплексный подход к организации проектной работы учащихся 1-4 классов',
      author: 'Иванова А.С.',
      date: '02.11.2024',
      category: 'Педагогика',
      downloads: 85
    },
    {
      title: 'Цифровые инструменты в образовании',
      description: 'Практическое руководство по использованию современных технологий в учебном процессе',
      author: 'Иванова А.С.',
      date: '28.10.2024',
      category: 'ИКТ',
      downloads: 203
    }
  ];

  const news = [
    {
      title: 'Участие в региональной конференции "Современное образование"',
      date: '25.11.2024',
      content: 'Представлен доклад о применении инновационных методов в преподавании математики. Получен диплом за лучшую методическую разработку.'
    },
    {
      title: 'Мастер-класс по проектной деятельности',
      date: '20.11.2024',
      content: 'Проведен открытый мастер-класс для коллег по организации проектной работы в начальной школе. Участвовало 15 педагогов из разных школ района.'
    },
    {
      title: 'Повышение квалификации',
      date: '15.11.2024',
      content: 'Успешно завершены курсы "Цифровые технологии в образовании" объемом 72 часа. Получен сертификат государственного образца.'
    }
  ];

  const usefulLinks = {
    teachers: [
      { title: 'Единая коллекция ЦОР', url: '#' },
      { title: 'Российская электронная школа', url: '#' },
      { title: 'Учи.ру', url: '#' }
    ],
    students: [
      { title: 'Решу ЕГЭ', url: '#' },
      { title: 'Якласс', url: '#' },
      { title: 'МЭО (Мобильное Электронное Образование)', url: '#' }
    ],
    parents: [
      { title: 'Дневник.ру', url: '#' },
      { title: 'Госуслуги. Образование', url: '#' },
      { title: 'Навигатор дополнительного образования', url: '#' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <h1 className="text-xl font-bold text-gray-900">Педагогический портфолио</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">Об авторе</a>
              <a href="#materials" className="text-gray-700 hover:text-primary transition-colors">Материалы</a>
              <a href="#news" className="text-gray-700 hover:text-primary transition-colors">Новости</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Иванова Анна Сергеевна
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Учитель математики высшей квалификационной категории
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Стаж работы: 15 лет | МБОУ "СОШ №25" г. Москва
            </p>
            <div className="flex justify-center space-x-4">
              <Badge variant="secondary" className="px-3 py-1">
                <Icon name="Award" size={16} className="mr-2" />
                Высшая категория
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Icon name="BookOpen" size={16} className="mr-2" />
                Педагог-новатор
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Icon name="Users" size={16} className="mr-2" />
                Наставник
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Search */}
        <section>
          <div className="flex items-center space-x-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Поиск по сайту..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>Найти</Button>
          </div>
        </section>

        {/* About Author */}
        <section id="about" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Об авторе</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="User" size={24} className="mr-3 text-primary" />
                  Профессиональная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <strong>Образование:</strong> Московский педагогический государственный университет, математический факультет, 2009 г.
                </div>
                <div>
                  <strong>Квалификационная категория:</strong> Высшая (подтверждена в 2023 г.)
                </div>
                <div>
                  <strong>Стаж работы:</strong> 15 лет
                </div>
                <div>
                  <strong>Место работы:</strong> МБОУ "СОШ №25" г. Москва, учитель математики
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Trophy" size={24} className="mr-3 text-primary" />
                  Достижения и награды
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Medal" size={16} className="mr-2 text-yellow-500" />
                  Почетная грамота Министерства образования (2022)
                </div>
                <div className="flex items-center">
                  <Icon name="Star" size={16} className="mr-2 text-yellow-500" />
                  Лучший учитель года района (2021)
                </div>
                <div className="flex items-center">
                  <Icon name="Certificate" size={16} className="mr-2 text-yellow-500" />
                  Диплом за инновационные методики (2020)
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Target Audiences */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Для участников образовательного процесса</h2>
          <Tabs defaultValue="teachers" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="teachers">Педагогам</TabsTrigger>
              <TabsTrigger value="students">Обучающимся</TabsTrigger>
              <TabsTrigger value="parents">Родителям</TabsTrigger>
            </TabsList>
            
            <TabsContent value="teachers" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Users" size={24} className="mr-3 text-primary" />
                    Для педагогов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Методические материалы:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Рабочие программы по математике</li>
                        <li>• Конспекты уроков и внеклассных мероприятий</li>
                        <li>• Презентации и дидактические материалы</li>
                        <li>• Контрольно-измерительные материалы</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Профессиональное развитие:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Мастер-классы и семинары</li>
                        <li>• Обмен опытом</li>
                        <li>• Консультации по методикам</li>
                        <li>• Совместные проекты</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="students" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="BookOpen" size={24} className="mr-3 text-primary" />
                    Для обучающихся
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Учебные ресурсы:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Дополнительные задания и упражнения</li>
                        <li>• Интерактивные материалы</li>
                        <li>• Подготовка к ОГЭ и ЕГЭ</li>
                        <li>• Олимпиадные задачи</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Поддержка:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Индивидуальные консультации</li>
                        <li>• Помощь в выполнении домашних заданий</li>
                        <li>• Проектная деятельность</li>
                        <li>• Участие в конкурсах</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="parents" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Home" size={24} className="mr-3 text-primary" />
                    Для родителей
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Информация:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Успеваемость и посещаемость</li>
                        <li>• Расписание консультаций</li>
                        <li>• Домашние задания</li>
                        <li>• Объявления и уведомления</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Взаимодействие:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Родительские собрания</li>
                        <li>• Индивидуальные беседы</li>
                        <li>• Рекомендации по домашней работе</li>
                        <li>• Совместные мероприятия</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Methodical Materials */}
        <section id="materials" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Методические материалы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodicalMaterials.map((material, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{material.category}</Badge>
                    <span className="text-sm text-gray-500">{material.date}</span>
                  </div>
                  <CardTitle className="text-lg">{material.title}</CardTitle>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Icon name="Download" size={16} />
                      <span>{material.downloads}</span>
                    </div>
                    <Button size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Автор: {material.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* News */}
        <section id="news" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Новости</h2>
          <div className="space-y-6">
            {news.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      {item.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Useful Links */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Полезные ссылки</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Users" size={24} className="mr-3 text-primary" />
                  Для педагогов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {usefulLinks.teachers.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="text-primary hover:underline flex items-center">
                        <Icon name="ExternalLink" size={16} className="mr-2" />
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="BookOpen" size={24} className="mr-3 text-primary" />
                  Для учеников
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {usefulLinks.students.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="text-primary hover:underline flex items-center">
                        <Icon name="ExternalLink" size={16} className="mr-2" />
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Home" size={24} className="mr-3 text-primary" />
                  Для родителей
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {usefulLinks.parents.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="text-primary hover:underline flex items-center">
                        <Icon name="ExternalLink" size={16} className="mr-2" />
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Poll */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Опрос</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Какие методические материалы вас больше всего интересуют?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['Конспекты уроков', 'Презентации', 'Контрольные работы', 'Внеклассные мероприятия'].map((option) => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="poll" 
                      value={option}
                      onChange={(e) => setPollChoice(e.target.value)}
                      className="text-primary"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <Button className="mt-4 w-full">Проголосовать</Button>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form */}
        <section id="contacts" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Обратная связь</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Свяжитесь со мной</CardTitle>
              <CardDescription>
                Задайте вопрос, предложите идею для сотрудничества или поделитесь отзывом
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Сообщение</label>
                <Textarea placeholder="Напишите ваше сообщение..." rows={5} />
              </div>
              <Button className="w-full">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Site Map */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Карта сайта</h2>
          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="main-sections">
                  <AccordionTrigger>Основные разделы</AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid md:grid-cols-2 gap-2 text-sm">
                      <li>• Главная страница</li>
                      <li>• Об авторе</li>
                      <li>• Для педагогов</li>
                      <li>• Для обучающихся</li>
                      <li>• Для родителей</li>
                      <li>• Методические материалы</li>
                      <li>• Новости</li>
                      <li>• Полезные ссылки</li>
                      <li>• Опросы и голосования</li>
                      <li>• Контакты</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="resources">
                  <AccordionTrigger>Образовательные ресурсы</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm space-y-1">
                      <li>• Рабочие программы</li>
                      <li>• Планы уроков</li>
                      <li>• Презентации</li>
                      <li>• Дидактические материалы</li>
                      <li>• Контрольно-измерительные материалы</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300">
                <p>Email: anna.ivanova@school25.edu</p>
                <p>Телефон: +7 (495) 123-45-67</p>
                <p>МБОУ "СОШ №25", кабинет 201</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">Об авторе</a></li>
                <li><a href="#materials" className="hover:text-white transition-colors">Методические материалы</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Версия для слабовидящих</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="mr-2">A+</Button>
                <Button variant="outline" size="sm" className="mr-2">Ч/Б</Button>
                <Button variant="outline" size="sm">Выкл. картинки</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Педагогический портфолио Ивановой А.С. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;