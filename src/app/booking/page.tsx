import BookingWizard from "@/components/booking/BookingWizard";

export const metadata = {
  title: "Booking | REAL.CO Hair Studio",
  description: "Atur jadwal grooming kamu dengan barber pilihan di REAL.CO Hair Studio.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen pt-20 pb-6 px-4 sm:px-6 bg-off-white flex flex-col justify-center">
      <div className="max-w-3xl mx-auto mb-4 sm:mb-12 text-center mt-4">
        <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-forest-dark mb-2 sm:mb-4">BOOKING HAIRCUT</h1>
        <p className="text-forest/70 text-xs sm:text-base hidden sm:block">Atur jadwal grooming kamu dengan mudah dan tanpa antre.</p>
      </div>
      
      <BookingWizard />
    </div>
  );
}
