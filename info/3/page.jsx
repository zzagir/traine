import { info } from '../../../travels'
import InfoLayout from '../../../components/InfoLayout/InfoLayout'

const InfoPage = () => {
	return (
		<div style={{ height: '100%' }}>
			<InfoLayout
				firstText={info[2].firstText}
				img={info[2].img}
				infoDescription={info[2].infoDescription}
				infoText={info[2].infoText}
				secondText={info[2].secondText}
				thirdText={info[2].thirdText}
			/>
		</div>
	)
}

export default InfoPage
