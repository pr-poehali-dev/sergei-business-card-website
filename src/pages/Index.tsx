
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Хедер с фото и именем */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <Avatar className="w-32 h-32 border-4 border-indigo-400 shadow-lg">
            <img 
              src="https://cdn.poehali.dev/files/4690ee8e-f006-4237-8265-20c0720e77b5.jpg" 
              alt="Сергей" 
              className="object-cover"
            />
          </Avatar>
          <div>
            <h1 className="text-4xl font-bold mb-2">Сергей Иванов</h1>
            <p className="text-xl opacity-90">Веб-разработчик и консультант</p>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Левая колонка - биография */}
          <div className="md:col-span-2">
            <Card className="mb-8 bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Биография</h2>
                <div className="md:flex gap-6 mb-6">
                  <img 
                    src="https://cdn.poehali.dev/files/4690ee8e-f006-4237-8265-20c0720e77b5.jpg" 
                    alt="Сергей Иванов" 
                    className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 shadow-md object-cover"
                  />
                  <div>
                    <p className="text-gray-300 mb-4">
                      Сергей Иванов — опытный веб-разработчик с более чем 10-летним стажем в IT-индустрии. 
                      Специализируется на создании современных веб-приложений, оптимизации производительности 
                      и консультировании по вопросам цифровой трансформации бизнеса.
                    </p>
                    <p className="text-gray-300">
                      Закончил Московский Государственный Технический Университет по специальности 
                      "Информационные технологии". Работал в ведущих технологических компаниях, включая 
                      разработку сложных проектов для корпоративных клиентов.
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">
                  В свободное время увлекается фотографией, туризмом и игрой на гитаре. 
                  Постоянно совершенствуется в профессиональной сфере, изучая новые технологии 
                  и методологии разработки.
                </p>
              </CardContent>
            </Card>

            {/* Карусель с фото */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Проекты и фотогалерея</h2>
                <Carousel className="w-full">
                  <CarouselContent>
                    {[
                      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
                      "https://cdn.poehali.dev/files/4690ee8e-f006-4237-8265-20c0720e77b5.jpg",
                      "https://images.unsplash.com/photo-1517245386540-7b599f602b31?q=80&w=800&auto=format&fit=crop",
                    ].map((src, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <img 
                              src={src} 
                              alt={`Проект ${index + 1}`} 
                              className="h-60 w-full object-cover transition-transform hover:scale-105 duration-300"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-gray-700 hover:bg-gray-600" />
                  <CarouselNext className="right-2 bg-gray-700 hover:bg-gray-600" />
                </Carousel>
              </CardContent>
            </Card>
          </div>

          {/* Правая колонка - контакты и соцсети */}
          <div>
            <Card className="mb-8 bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Контакты</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-blue-400" />
                    <span className="text-gray-300">sergey@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-blue-400" />
                    <span className="text-gray-300">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-blue-400" />
                    <span className="text-gray-300">Москва, Россия</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Социальные сети</h2>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="flex items-center gap-2 justify-start border-gray-600 text-gray-200 hover:bg-gray-700">
                    <Icon name="Github" />
                    <span>GitHub</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 justify-start border-gray-600 text-gray-200 hover:bg-gray-700">
                    <Icon name="Linkedin" />
                    <span>LinkedIn</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 justify-start border-gray-600 text-gray-200 hover:bg-gray-700">
                    <Icon name="Instagram" />
                    <span>Instagram</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 justify-start border-gray-600 text-gray-200 hover:bg-gray-700">
                    <Icon name="Twitter" />
                    <span>Twitter</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Сергей Иванов. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Icon name="Github" className="cursor-pointer hover:text-blue-400 transition-colors" />
              <Icon name="Linkedin" className="cursor-pointer hover:text-blue-400 transition-colors" />
              <Icon name="Instagram" className="cursor-pointer hover:text-blue-400 transition-colors" />
              <Icon name="Twitter" className="cursor-pointer hover:text-blue-400 transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
