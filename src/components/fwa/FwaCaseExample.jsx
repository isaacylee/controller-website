import { motion } from 'framer-motion';
import Image from 'next/image';

const FwaCaseExample = () => {
  return (
    <section className='bg-[#1a1a1a] py-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-12 text-4xl font-extrabold text-[#41ffca] sm:text-5xl'>
            CASE EXAMPLE
          </h2>

          <div className='grid grid-cols-1 gap-16 lg:grid-cols-2'>
            {/* Case Description */}
            <div className='space-y-6 text-lg font-bold leading-relaxed text-[#41ffca] sm:text-xl md:space-y-8 md:text-2xl'>
              <p>
                A traffic officer was investigated for allegations of issuing
                fraudulent $93 red zone parking citations to vehicles parked at
                curbs that were not painted red. The investigation found the
                officer issued 163 citations that were unenforceable — either
                for curbs not clearly painted red or issued at incorrect
                locations.
              </p>
              <p>
                The total amount recovered for motorists was{' '}
                <strong>$22,571</strong> through refunds and cancellation of
                unpaid citations.
              </p>
              <p>
                A public report detailing the findings and recommendations was
                released in May 2025:
                <br />
                <a
                  href='https://bit.ly/fwa-redcurb'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white hover:text-blue-300'
                >
                  bit.ly/fwa-redcurb
                </a>
              </p>
            </div>

            {/* Image + Caption */}
            <div className='mx-auto space-y-4'>
              <p className='text-base font-bold text-gray-300 sm:text-lg md:text-2xl'>
                These vehicles ALL got parking tickets for red curb zones.{' '}
              </p>
              <Image
                src='/redcurbgraphic.png'
                alt='Red curb citation example'
                width={550}
                height={300}
                className='object-cover'
              />
              <p className='text-base font-bold text-white sm:text-lg md:text-2xl'>
                We didn’t think so either – and we got the City to refund
                $22,571 for these kinds of tickets.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FwaCaseExample;
