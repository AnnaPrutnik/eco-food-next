import { Box, Layout } from 'components';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <Box padding="sp8" display="flex" gridGap="sp8">
        <Box
          padding="0 16px 0 128px"
          backgroundColor="darkBackground"
          borderRadius="24px"
          flexGrow={1}
          display="flex"
        >
          <Box
            display="flex"
            flexDirection="column"
            gridGap="48px"
            padding="80px 0 74px"
            flexGrow={1}
          >
            <h1
              style={{
                fontFamily: 'gilroy',
                fontWeight: 700,
                fontSize: '56px',
                lineHeight: '68px',
              }}
            >
              Organic bar
            </h1>
            <p
              style={{
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '28px',
              }}
            >
              Especially suitable for athletes, but also ideal for preventing
              fatigue and loss of productivity.
            </p>
            <button style={{ width: '135px', height: '52px' }}>Shop now</button>
          </Box>
          <Box position="relative" height="100%" minWidth="50%">
            <Image src="/banner.png" alt="Banner" fill sizes="100vw" />
          </Box>
        </Box>
        <Box width="480px" height="454px" position="relative">
          <Image
            src="/banner-small.jpg"
            alt="advertise banner"
            fill
            sizes="100vw"
          />
        </Box>
      </Box>
    </Layout>
  );
}
