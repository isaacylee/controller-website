import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const Recommendations = () => {
  return (
    <section className='bg-[#1a1a1a] py-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-12 text-3xl font-bold text-[#41ffca] sm:text-5xl'>
            RECOMMENDATIONS
          </h2>

          <div className='grid grid-cols-1 items-stretch gap-x-20 lg:grid-cols-2'>
            <div className='space-y-6 pr-4 text-[#41ffca]'>
              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-xl leading-relaxed'>
                  The City should assess the feasibility of revising TAHO to
                  provide LAHD with the authority to independently issue
                  administrative citations and fines.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-xl leading-relaxed'>
                  The City should assess the feasibility of increasing citation
                  fine amounts for TAHO violations.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-xl leading-relaxed'>
                  City Council should consider increasing the maximum civil
                  penalty amount for TAHO violations.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-xl leading-relaxed'>
                  City Council should consider amending TAHO language to
                  guarantee the awarding of additional civil penalties to
                  prevailing tenants that are older than 65 or that have
                  disabilities.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-xl leading-relaxed'>
                  LAHD should establish formal policies and procedures for
                  managing TAHO cases.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-xl leading-relaxed'>
                  LAHD should provide formal training on TAHO for housing
                  investigators.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-xl leading-relaxed'>
                  LAHD should hire additional housing investigators.
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <Circle className='mt-2.5 h-3 w-3 flex-shrink-0 fill-[#41ffca]' />
                <p className='text-xl leading-relaxed'>
                  LAHD should develop a tracking and enforcement protocol that
                  will allow the department to identify and track rental units
                  which become vacant due to confirmed violations of TAHO.
                </p>
              </div>
            </div>

            <div className='mt-12 lg:mt-[-90px]'>
              <div className='sticky top-4 rounded-lg bg-[#2a2a2a] p-8'>
                <h3 className='mb-2 text-2xl font-bold text-[#41ffca]'>
                  TAHO COMPLAINT SUBMISSIONS
                </h3>
                <p className='mb-1 text-[#41ffca]'>BY COUNCIL DISTRICT</p>
                <p className='mb-8 text-gray-400'>FEB 2022 - DEC 2023</p>

                <img
                  src='/taho-cd-map.png'
                  alt='TAHO Complaint Submissions Map'
                  className='h-auto w-full rounded-md'
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
