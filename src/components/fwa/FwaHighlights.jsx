import { motion } from 'framer-motion';

import FwaBarChart from './FwaBarChart';

const FwaHighlights = () => {
  return (
    <section className='bg-[#41ffca] py-20 text-black'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-12 text-4xl font-extrabold sm:text-5xl'>
            2024 HIGHLIGHTS
          </h2>

          <div className='grid grid-cols-1 gap-x-20 gap-y-16 lg:grid-cols-2'>
            {/* Text Highlights */}
            <div className='text-lg font-bold leading-relaxed sm:text-xl md:text-2xl'>
              <ul className='ml-4 list-outside list-disc space-y-6'>
                <li>708 cases received, up 61% from 441 cases in 2023</li>
                <li>
                  26 investigations were completed — 4 were substantiated and 22
                  were unsubstantiated
                </li>
                <li>
                  The 61% spike in cases received mainly related to matters
                  outside FWA's jurisdiction, e.g., personal financial fraud
                </li>
                <li>
                  For the entire City of LA (40+ departments and 40,000+
                  employees), we only have 5 FWA investigators
                </li>
              </ul>
            </div>

            {/* Bar Chart Image */}
            <div className='flex items-center justify-center'>
              <FwaBarChart />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FwaHighlights;
